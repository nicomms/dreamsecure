package com.nicomms.dreamsecure.service;

import java.util.List;
import java.util.Map;

import com.nicomms.dreamsecure.vo.AddressVO;
import com.nicomms.dreamsecure.vo.EmpVO;
import com.nicomms.dreamsecure.vo.PageVO;

public interface EmpService {
	public EmpVO getEmp(Integer empId);
	public List<EmpVO> getEmpAll();
	public List<EmpVO> getEmpList(int[] empIds);
	public List<AddressVO> getAddress();
	public List<EmpVO> getEmpPage(PageVO pageVO);
	public int updateEmp(EmpVO empVO);
	public int getTotalCount();
	public Integer insertEmp(EmpVO empVO);
}
