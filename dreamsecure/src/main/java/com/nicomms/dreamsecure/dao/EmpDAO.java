package com.nicomms.dreamsecure.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nicomms.dreamsecure.vo.AddressVO;
import com.nicomms.dreamsecure.vo.EmpVO;
import com.nicomms.dreamsecure.vo.PageVO;

@Repository
public class EmpDAO {

	@Autowired
	private SqlSessionTemplate mybatis;

	public EmpVO getEmp(Integer empId) {
		System.out.println("===>getEmp" + empId);
		return (EmpVO) mybatis.selectOne("dreamsecure.dao.EmpDAO.selectEmp", empId);
	}

	public List<EmpVO> getEmpAll() {
		return mybatis.selectList("dreamsecure.dao.EmpDAO.selectEmpAll");
	}

	public List<EmpVO> getEmpList(int[] codes) {
		Map<String, Object> param = new HashMap<String, Object>();
		List<String> codeList = new ArrayList<String>();

		for (int i = 0; i < codes.length; i++) {
			codeList.add(Integer.toString(codes[i]));
		}

		param.put("code_list", codeList);
		return mybatis.selectList("dreamsecure.dao.EmpDAO.selectEmpList", param);

	}

	public List<AddressVO> getAddress() {
		return mybatis.selectList("dreamsecure.dao.EmpDAO.selectAddressList");
	}

	public List<EmpVO> getEmpPage(PageVO pageVO) {
		return mybatis.selectList("dreamsecure.dao.EmpDAO.selectEmpPage", pageVO);
	}

	public int updateEmp(EmpVO empVO) {
		return mybatis.update("dreamsecure.dao.EmpDAO.updateEmp", empVO);
	}
	
	public int insertEmp(EmpVO empVO) {
		return mybatis.insert("dreamsecure.dao.EmpDAO.insertEmp", empVO);
	}
	
	public int getTotalCount() {
		return mybatis.selectOne("dreamsecure.dao.EmpDAO.getTotalCount");
	}
	
}
