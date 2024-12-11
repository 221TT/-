package com.cl.dao;

import com.cl.entity.CaiwuxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.CaiwuxinxiView;


/**
 * 财务信息
 * 
 * @author 
 * @email 
 * @date 2024-11-15 11:20:23
 */
public interface CaiwuxinxiDao extends BaseMapper<CaiwuxinxiEntity> {
	
	List<CaiwuxinxiView> selectListView(@Param("ew") Wrapper<CaiwuxinxiEntity> wrapper);

	List<CaiwuxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<CaiwuxinxiEntity> wrapper);
	
	CaiwuxinxiView selectView(@Param("ew") Wrapper<CaiwuxinxiEntity> wrapper);


    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<CaiwuxinxiEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<CaiwuxinxiEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<CaiwuxinxiEntity> wrapper);



}
