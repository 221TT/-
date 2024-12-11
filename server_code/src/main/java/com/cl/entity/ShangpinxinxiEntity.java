package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 商品信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-11-15 11:20:23
 */
@TableName("shangpinxinxi")
public class ShangpinxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ShangpinxinxiEntity() {
		
	}
	
	public ShangpinxinxiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId(type = IdType.AUTO)
	private Long id;
	/**
	 * 商品名称
	 */
					
	private String shangpinmingcheng;
	
	/**
	 * 商品分类
	 */
					
	private String shangpinfenlei;
	
	/**
	 * 商品图片
	 */
					
	private String shangpintupian;
	
	/**
	 * 商品规格
	 */
					
	private String shangpinguige;
	
	/**
	 * 收藏数
	 */
					
	private Integer storeupNumber;
	
	/**
	 * 评论数
	 */
					
	private Integer discussNumber;
	
	/**
	 * 商品价格
	 */
					
	private Double price;
	
	/**
	 * 最近点击时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date clicktime;
	
	/**
	 * 团购价
	 */
					
	private Double groupprice;
	
	/**
	 * 拼团人数
	 */
					
	private Integer grouppeople;
	
	/**
	 * 当前人数
	 */
					
	private Integer curpeople;
	
	/**
	 * 单次限购
	 */
					
	private Integer onelimittimes;
	
	/**
	 * 商品库存
	 */
					
	private Integer alllimittimes;
	
	/**
	 * 商品介绍
	 */
					
	private String shangpinjieshao;
	
	/**
	 * 积分
	 */
					
	private Integer jf;
	
	/**
	 * 赞
	 */
					
	private Integer thumbsupNumber;
	
	/**
	 * 踩
	 */
					
	private Integer crazilyNumber;
	
	/**
	 * 会员价
	 */
					
	private Double vipprice;
	
	/**
	 * 点击次数
	 */
					
	private Integer clickNumber;
	

	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：商品名称
	 */
	public void setShangpinmingcheng(String shangpinmingcheng) {
		this.shangpinmingcheng = shangpinmingcheng;
	}
	/**
	 * 获取：商品名称
	 */
	public String getShangpinmingcheng() {
		return shangpinmingcheng;
	}
	/**
	 * 设置：商品分类
	 */
	public void setShangpinfenlei(String shangpinfenlei) {
		this.shangpinfenlei = shangpinfenlei;
	}
	/**
	 * 获取：商品分类
	 */
	public String getShangpinfenlei() {
		return shangpinfenlei;
	}
	/**
	 * 设置：商品图片
	 */
	public void setShangpintupian(String shangpintupian) {
		this.shangpintupian = shangpintupian;
	}
	/**
	 * 获取：商品图片
	 */
	public String getShangpintupian() {
		return shangpintupian;
	}
	/**
	 * 设置：商品规格
	 */
	public void setShangpinguige(String shangpinguige) {
		this.shangpinguige = shangpinguige;
	}
	/**
	 * 获取：商品规格
	 */
	public String getShangpinguige() {
		return shangpinguige;
	}
	/**
	 * 设置：收藏数
	 */
	public void setStoreupNumber(Integer storeupNumber) {
		this.storeupNumber = storeupNumber;
	}
	/**
	 * 获取：收藏数
	 */
	public Integer getStoreupNumber() {
		return storeupNumber;
	}
	/**
	 * 设置：评论数
	 */
	public void setDiscussNumber(Integer discussNumber) {
		this.discussNumber = discussNumber;
	}
	/**
	 * 获取：评论数
	 */
	public Integer getDiscussNumber() {
		return discussNumber;
	}
	/**
	 * 设置：商品价格
	 */
	public void setPrice(Double price) {
		this.price = price;
	}
	/**
	 * 获取：商品价格
	 */
	public Double getPrice() {
		return price;
	}
	/**
	 * 设置：最近点击时间
	 */
	public void setClicktime(Date clicktime) {
		this.clicktime = clicktime;
	}
	/**
	 * 获取：最近点击时间
	 */
	public Date getClicktime() {
		return clicktime;
	}
	/**
	 * 设置：团购价
	 */
	public void setGroupprice(Double groupprice) {
		this.groupprice = groupprice;
	}
	/**
	 * 获取：团购价
	 */
	public Double getGroupprice() {
		return groupprice;
	}
	/**
	 * 设置：拼团人数
	 */
	public void setGrouppeople(Integer grouppeople) {
		this.grouppeople = grouppeople;
	}
	/**
	 * 获取：拼团人数
	 */
	public Integer getGrouppeople() {
		return grouppeople;
	}
	/**
	 * 设置：当前人数
	 */
	public void setCurpeople(Integer curpeople) {
		this.curpeople = curpeople;
	}
	/**
	 * 获取：当前人数
	 */
	public Integer getCurpeople() {
		return curpeople;
	}
	/**
	 * 设置：单次限购
	 */
	public void setOnelimittimes(Integer onelimittimes) {
		this.onelimittimes = onelimittimes;
	}
	/**
	 * 获取：单次限购
	 */
	public Integer getOnelimittimes() {
		return onelimittimes;
	}
	/**
	 * 设置：商品库存
	 */
	public void setAlllimittimes(Integer alllimittimes) {
		this.alllimittimes = alllimittimes;
	}
	/**
	 * 获取：商品库存
	 */
	public Integer getAlllimittimes() {
		return alllimittimes;
	}
	/**
	 * 设置：商品介绍
	 */
	public void setShangpinjieshao(String shangpinjieshao) {
		this.shangpinjieshao = shangpinjieshao;
	}
	/**
	 * 获取：商品介绍
	 */
	public String getShangpinjieshao() {
		return shangpinjieshao;
	}
	/**
	 * 设置：积分
	 */
	public void setJf(Integer jf) {
		this.jf = jf;
	}
	/**
	 * 获取：积分
	 */
	public Integer getJf() {
		return jf;
	}
	/**
	 * 设置：赞
	 */
	public void setThumbsupNumber(Integer thumbsupNumber) {
		this.thumbsupNumber = thumbsupNumber;
	}
	/**
	 * 获取：赞
	 */
	public Integer getThumbsupNumber() {
		return thumbsupNumber;
	}
	/**
	 * 设置：踩
	 */
	public void setCrazilyNumber(Integer crazilyNumber) {
		this.crazilyNumber = crazilyNumber;
	}
	/**
	 * 获取：踩
	 */
	public Integer getCrazilyNumber() {
		return crazilyNumber;
	}
	/**
	 * 设置：会员价
	 */
	public void setVipprice(Double vipprice) {
		this.vipprice = vipprice;
	}
	/**
	 * 获取：会员价
	 */
	public Double getVipprice() {
		return vipprice;
	}
	/**
	 * 设置：点击次数
	 */
	public void setClickNumber(Integer clickNumber) {
		this.clickNumber = clickNumber;
	}
	/**
	 * 获取：点击次数
	 */
	public Integer getClickNumber() {
		return clickNumber;
	}

}
