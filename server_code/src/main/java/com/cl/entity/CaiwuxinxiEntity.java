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
 * 财务信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-11-15 11:20:23
 */
@TableName("caiwuxinxi")
public class CaiwuxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public CaiwuxinxiEntity() {
		
	}
	
	public CaiwuxinxiEntity(T t) {
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
	 * 收入名称
	 */
					
	private String shourumingcheng;
	
	/**
	 * 收入金额
	 */
					
	private Double shourujine;
	
	/**
	 * 收入备注
	 */
					
	private String shourubeizhu;
	
	/**
	 * 支出名称
	 */
					
	private String zhichumingcheng;
	
	/**
	 * 支出金额
	 */
					
	private Double zhichujine;
	
	/**
	 * 支出说明
	 */
					
	private String zhichushuoming;
	
	/**
	 * 收支结余
	 */
					
	private Double shouzhijieyu;
	
	/**
	 * 登记日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date dengjiriqi;
	
	/**
	 * 登记内容
	 */
					
	private String dengjineirong;
	

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
	 * 设置：收入名称
	 */
	public void setShourumingcheng(String shourumingcheng) {
		this.shourumingcheng = shourumingcheng;
	}
	/**
	 * 获取：收入名称
	 */
	public String getShourumingcheng() {
		return shourumingcheng;
	}
	/**
	 * 设置：收入金额
	 */
	public void setShourujine(Double shourujine) {
		this.shourujine = shourujine;
	}
	/**
	 * 获取：收入金额
	 */
	public Double getShourujine() {
		return shourujine;
	}
	/**
	 * 设置：收入备注
	 */
	public void setShourubeizhu(String shourubeizhu) {
		this.shourubeizhu = shourubeizhu;
	}
	/**
	 * 获取：收入备注
	 */
	public String getShourubeizhu() {
		return shourubeizhu;
	}
	/**
	 * 设置：支出名称
	 */
	public void setZhichumingcheng(String zhichumingcheng) {
		this.zhichumingcheng = zhichumingcheng;
	}
	/**
	 * 获取：支出名称
	 */
	public String getZhichumingcheng() {
		return zhichumingcheng;
	}
	/**
	 * 设置：支出金额
	 */
	public void setZhichujine(Double zhichujine) {
		this.zhichujine = zhichujine;
	}
	/**
	 * 获取：支出金额
	 */
	public Double getZhichujine() {
		return zhichujine;
	}
	/**
	 * 设置：支出说明
	 */
	public void setZhichushuoming(String zhichushuoming) {
		this.zhichushuoming = zhichushuoming;
	}
	/**
	 * 获取：支出说明
	 */
	public String getZhichushuoming() {
		return zhichushuoming;
	}
	/**
	 * 设置：收支结余
	 */
	public void setShouzhijieyu(Double shouzhijieyu) {
		this.shouzhijieyu = shouzhijieyu;
	}
	/**
	 * 获取：收支结余
	 */
	public Double getShouzhijieyu() {
		return shouzhijieyu;
	}
	/**
	 * 设置：登记日期
	 */
	public void setDengjiriqi(Date dengjiriqi) {
		this.dengjiriqi = dengjiriqi;
	}
	/**
	 * 获取：登记日期
	 */
	public Date getDengjiriqi() {
		return dengjiriqi;
	}
	/**
	 * 设置：登记内容
	 */
	public void setDengjineirong(String dengjineirong) {
		this.dengjineirong = dengjineirong;
	}
	/**
	 * 获取：登记内容
	 */
	public String getDengjineirong() {
		return dengjineirong;
	}

}
