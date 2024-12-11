package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.UsersEntity;
import com.cl.entity.view.UsersView;

import com.cl.service.UsersService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.MPUtil;
import com.cl.utils.MapUtils;
import com.cl.utils.CommonUtil;
import com.cl.entity.WxLoginParam;
import com.cl.utils.WechatUtil;
import org.apache.commons.codec.digest.DigestUtils;

/**
 * 管理员
 * 后端接口
 * @author 
 * @email 
 * @date 2024-11-15 11:20:23
 */
@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersService usersService;



	@Autowired
	private TokenService tokenService;
	
	/**
	 * 登录
	 */
	@IgnoreAuth
	@RequestMapping(value = "/login")
	public R login(String username, String password, String captcha, HttpServletRequest request) {
		UsersEntity u = usersService.selectOne(new EntityWrapper<UsersEntity>().eq("username", username));
        if(u==null || !u.getPassword().equals(password)) {
            return R.error("账号或密码不正确");
        }
		String token = tokenService.generateToken(u.getId(), username,"users",  "管理员" );
		return R.ok().put("token", token);
	}


    /**
     * 微信登录
     */
    @RequestMapping(value = "/wx/login")
    @IgnoreAuth
    public R wxLogin(@RequestBody WxLoginParam param) {
        String token = null;
        //接收小程序发送的code
        com.alibaba.fastjson.JSONObject SessionKeyOpenId = WechatUtil.getSessionKeyOrOpenId(param.getCode());

        //接收微信接口服务  获取返回的参数
        String openId = SessionKeyOpenId.getString("openid");
        String sessionKey = SessionKeyOpenId.getString("session_key");

        if (StringUtils.isBlank(openId) && StringUtils.isBlank(sessionKey)) {
            return R.error("接口请求失败！");
        }

        com.alibaba.fastjson.JSONObject object = WechatUtil.getUserInfo(param.getEncryptedData(), sessionKey, param.getIv());
        System.out.println(com.alibaba.fastjson.JSONObject.toJSONString(object));

        //校验签名 小程序发送的签名signature与服务器端生成的签名signature2 = sha1(rawData + sessionKey)
        String signature2 = DigestUtils.sha1Hex(param.getRawData() + sessionKey);
        if (!param.getSignature().equals(signature2)) {
            return R.error("签名校验失败");
        }

        UsersEntity user = usersService.selectOne(new EntityWrapper<UsersEntity>().eq("openid", openId));
        if (user == null) {
            return R.error("请登录账号绑定微信后再进行微信登录。");
        } else {
            //已绑定，登录成功
            token = tokenService.generateToken(user.getId(), user.getUsername(),"users", "");
        }

        return R.ok().put("token", token);
    }

    /**
     * 微信账号绑定
     */
    @RequestMapping(value = "/wx/bind")
    public R wxBind(@RequestBody WxLoginParam param , HttpServletRequest request){
        //接收小程序发送的code
        com.alibaba.fastjson.JSONObject SessionKeyOpenId = WechatUtil.getSessionKeyOrOpenId(param.getCode());

        //接收微信接口服务  获取返回的参数
        String openId = SessionKeyOpenId.getString("openid");
        String sessionKey = SessionKeyOpenId.getString("session_key");

        if (StringUtils.isBlank(openId) && StringUtils.isBlank(sessionKey)) {
            return R.error("接口请求失败！");
        }

        com.alibaba.fastjson.JSONObject object = WechatUtil.getUserInfo(param.getEncryptedData(), sessionKey, param.getIv());
        System.out.println(com.alibaba.fastjson.JSONObject.toJSONString(object));

        //校验签名 小程序发送的签名signature与服务器端生成的签名signature2 = sha1(rawData + sessionKey)
        String signature2 = DigestUtils.sha1Hex(param.getRawData() + sessionKey);
        if (!param.getSignature().equals(signature2)) {
            return R.error("签名校验失败");
        }
        String rawData = param.getRawData();
        com.alibaba.fastjson.JSONObject rawDataJson = com.alibaba.fastjson.JSON.parseObject(rawData);
        UsersEntity user = usersService.selectOne(new EntityWrapper<UsersEntity>().eq("openid", openId));
        if (user == null) {
            Long id = (Long)request.getSession().getAttribute("userId");
            user = usersService.selectById(id);
            if(user!=null) {
                user.setOpenid(openId);
            }
            usersService.updateById(user);
        } else {
            return R.error("账号已被绑定");
        }
        return R.ok("绑定成功");
    }

    /**
     * 微信账号解绑
     */
    @RequestMapping(value = "/wx/unbind")
    public R wxUnbind(HttpServletRequest request){
        Long id = (Long)request.getSession().getAttribute("userId");
        UsersEntity user = usersService.selectById(id);
        if(StringUtils.isNotBlank(user.getOpenid())) {
            user.setOpenid("");
        } else {
            return R.error("账号已解绑");
        }
        usersService.updateById(user);
        return R.ok("解绑成功");
    }
	
	/**
     * 注册
     */
	@IgnoreAuth
    @RequestMapping("/register")
    public R register(@RequestBody UsersEntity users){
    	//ValidatorUtils.validateEntity(users);
    UsersEntity u = usersService.selectOne(new EntityWrapper<UsersEntity>().eq("username", users.getUsername()));
		if(u!=null) {
			return R.error("注册用户已存在");
		}
		Long uId = new Date().getTime();
		users.setId(uId);
        users.setPassword(users.getPassword());
        usersService.insert(users);
        return R.ok();
    }

	
	/**
	 * 退出
	 */
	@RequestMapping("/logout")
	public R logout(HttpServletRequest request) {
		request.getSession().invalidate();
		return R.ok("退出成功");
	}
	
	/**
     * 获取用户的session用户信息
     */
    @RequestMapping("/session")
    public R getCurrUser(HttpServletRequest request){
    	Long id = (Long)request.getSession().getAttribute("userId");
        return R.ok().put("data", usersService.selectView(new EntityWrapper<UsersEntity>().eq("id", id)));
    }
    
    /**
     * 密码重置
     */
    @IgnoreAuth
	@RequestMapping(value = "/resetPass")
    public R resetPass(String username, HttpServletRequest request){
    	UsersEntity u = usersService.selectOne(new EntityWrapper<UsersEntity>().eq("username", username));
    	if(u==null) {
    		return R.error("账号不存在");
    	}
        u.setPassword("123456");
        usersService.updateById(u);
        return R.ok("密码已重置为：123456");
    }




    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,UsersEntity users,
		HttpServletRequest request){
        EntityWrapper<UsersEntity> ew = new EntityWrapper<UsersEntity>();

		PageUtils page = usersService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, users), params), params));

        return R.ok().put("data", page);
    }
    
    
    
    
    
    
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,UsersEntity users, 
		HttpServletRequest request){
        EntityWrapper<UsersEntity> ew = new EntityWrapper<UsersEntity>();

		PageUtils page = usersService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, users), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( UsersEntity users){
       	EntityWrapper<UsersEntity> ew = new EntityWrapper<UsersEntity>();
      	ew.allEq(MPUtil.allEQMapPre( users, "users")); 
        return R.ok().put("data", usersService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(UsersEntity users){
        EntityWrapper< UsersEntity> ew = new EntityWrapper< UsersEntity>();
 		ew.allEq(MPUtil.allEQMapPre( users, "users")); 
		UsersView usersView =  usersService.selectView(ew);
		return R.ok("查询管理员成功").put("data", usersView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        UsersEntity users = usersService.selectById(id);
		users = usersService.selectView(new EntityWrapper<UsersEntity>().eq("id", id));
        return R.ok().put("data", users);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        UsersEntity users = usersService.selectById(id);
		users = usersService.selectView(new EntityWrapper<UsersEntity>().eq("id", id));
        return R.ok().put("data", users);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody UsersEntity users, HttpServletRequest request){
    	users.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(users);
        UsersEntity u = usersService.selectOne(new EntityWrapper<UsersEntity>().eq("username", users.getUsername()));
		if(u!=null) {
			return R.error("用户已存在");
		}
		users.setId(new Date().getTime());
        users.setPassword(users.getPassword());
        usersService.insert(users);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody UsersEntity users, HttpServletRequest request){
    	users.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(users);
        UsersEntity u = usersService.selectOne(new EntityWrapper<UsersEntity>().eq("username", users.getUsername()));
		if(u!=null) {
			return R.error("用户已存在");
		}
		users.setId(new Date().getTime());
        users.setPassword(users.getPassword());
        usersService.insert(users);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody UsersEntity users, HttpServletRequest request){
        //ValidatorUtils.validateEntity(users);
        usersService.updateById(users);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        usersService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	









}
