package com.nicomms.dreamsecure.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nicomms.dreamsecure.dao.EmpDAO;
import com.nicomms.dreamsecure.vo.AddressVO;
import com.nicomms.dreamsecure.vo.EmpVO;
import com.nicomms.dreamsecure.vo.PageVO;

@Service("empService")
public class EmpServiceImpl implements EmpService {

	@Autowired
	private EmpDAO empDao;
	
	@Override
	public EmpVO getEmp(Integer empId) {
		return empDao.getEmp(empId);
	}

	@Override
	public List<EmpVO> getEmpAll() {
		return empDao.getEmpAll();
	}

	@Override
	public List<EmpVO> getEmpList(int[] empIds) {
		return empDao.getEmpList(empIds);
	}

	@Override
	public List<AddressVO> getAddress() {
		return empDao.getAddress();
	}
	
	public int updateEmp(EmpVO empVO) {
		return empDao.updateEmp(empVO);
	}
	/*
	 * @Override public List<AddressVO> getAddress(Map param) { return
	 * empDao.getAddress(param); }
	 */

	@Override
	public List<EmpVO> getEmpPage(PageVO pageVO) {
		return empDao.getEmpPage(pageVO);
	}

	@Override
	public int getTotalCount() {
		return empDao.getTotalCount();
	}

	@Override
	public int insertEmp(EmpVO empVO) {
		return empDao.
	}
}
