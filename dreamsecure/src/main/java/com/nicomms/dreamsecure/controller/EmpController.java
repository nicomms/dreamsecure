package com.nicomms.dreamsecure.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.tomcat.util.json.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.nicomms.dreamsecure.service.EmpService;
import com.nicomms.dreamsecure.vo.AddressVO;
import com.nicomms.dreamsecure.vo.EmpVO;
import com.nicomms.dreamsecure.vo.PageVO;

@RestController
public class EmpController {

	private final Logger log = LoggerFactory.getLogger(EmpController.class);

	@Autowired
	EmpService service;

	@GetMapping(value = "/getEmp")
	public String getEmp(HttpServletRequest req) throws Exception {

		Gson gson = new Gson();
		JsonObject jso = new JsonObject();

		Integer id = Integer.parseInt(req.getParameter("id"));
		String callback = req.getParameter("callback");

		EmpVO vo = new EmpVO();
		vo.setId(id);

		EmpVO retVo = service.getEmp(id);

		jso.addProperty("totalcount", 1);
		jso.add("data", gson.toJsonTree(retVo));

		String strJson = gson.toJson(jso);

		return String.format("%s(%s)", callback, strJson);
	}

	@RequestMapping(value = "/getEmpAll")
	public Map<String, Object> getEmpAll() {
		Map<String, Object> result = new HashMap<String, Object>();
		List<EmpVO> list = null;
		try {
			list = service.getEmpAll();

			result.put("code", 200);
			result.put("msg", "OK");
			result.put("data", list);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@RequestMapping(value = "/getEmpList")
	public Map<String, Object> getEmpList() {
		Map<String, Object> result = new HashMap<String, Object>();
		List<EmpVO> list = null;
		int[] empIds = { 10, 11 };
		try {
			list = service.getEmpList(empIds);

			result.put("code", 200);
			result.put("msg", "OK");
			result.put("data", list);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@RequestMapping(value = "/getEmpCount")
	public Map<String, Object> getEmpCount() {
		Map<String, Object> result = new HashMap<String, Object>();
		List<EmpVO> list = null;
		int[] empIds = { 10, 11 };
		try {
			list = service.getEmpList(empIds);

			result.put("code", 200);
			result.put("msg", "OK");
			result.put("data", list.size());

		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@GetMapping(value = "/getAddressList")
	public String getAddressList(HttpServletRequest req) throws Exception {

		Gson gson = new Gson();
		JsonObject jso = new JsonObject();

		List<AddressVO> list = service.getAddress();

		jso.addProperty("totalCount", list.size());
		jso.add("data", gson.toJsonTree(list));

		String strJson = gson.toJson(jso);

		return String.format("%s", strJson);
	}

	@RequestMapping(value = "/updateEmp", method=RequestMethod.POST)
	public String updateEmp(HttpServletRequest req) throws Exception {

		log.info("==================================================");
		log.info("parameter:" + req.getParameter("data"));
		System.out.println(req.getParameter("data"));
		log.info("==================================================");

		JsonParser jsonParser=new JsonParser();
		JsonObject jsonObj=(JsonObject)jsonParser.parse(req.getParameter("data"));
		
		
		EmpVO empVO = new EmpVO();
		
		empVO.setId(jsonObj.get("id").getAsInt());
		empVO.setEmpNm(jsonObj.get("empNm").getAsString());
//		empVO.setEmpMob(jsonObj.get("empMob").getAsString());

		Integer updateCount = service.updateEmp(empVO);
		log.info("===> updateCount ", updateCount);

		Gson gson = new Gson();
		JsonObject jso = new JsonObject();

		EmpVO retVo = null;
		if (updateCount > 0) {
			log.info("success");
			System.out.println("success");
		}else {
			log.info("fail");
			System.out.println("fail");
		}
		
		jso.addProperty("success", true);
		String strJson = gson.toJson(jso);
		return String.format("%s", strJson);
	}
	
	@RequestMapping(value = "/insertEmp", method=RequestMethod.POST)
	public String insertEmp(HttpServletRequest req) throws Exception {

		log.info("==================================================");
		log.info("parameter:" + req.getParameter("data"));
		System.out.println(req.getParameter("data"));
		log.info("==================================================");

		JsonParser jsonParser=new JsonParser();
		JsonObject jsonObj=(JsonObject)jsonParser.parse(req.getParameter("data"));
		
		
		EmpVO empVO = new EmpVO();
		
		empVO.setId(jsonObj.get("id").getAsInt());
		empVO.setEmpNm(jsonObj.get("empNm").getAsString());
		empVO.setEmpMob(jsonObj.get("empMob").getAsString());

		Integer insertCount = service.insertEmp(empVO);
		log.info("===> insertCount ", insertCount);

		Gson gson = new Gson();
		JsonObject jso = new JsonObject();

		EmpVO retVo = null;
		if (insertCount > 0) {
			jso.addProperty("success", true);
			
			log.info("success");
			System.out.println("success");
		}else {
			jso.addProperty("fail", true);
			
			log.info("fail");
			System.out.println("fail");
		}
		

		String strJson = gson.toJson(jso);
		return String.format("%s", strJson);
	}

	/*
	 * @GetMapping(value = "/updateEmp") public String updateEmp(HttpServletRequest
	 * req) throws Exception {
	 * 
	 * log.info("==================================================");
	 * log.info("parameter:" + req.getParameter("data"));
	 * log.info("==================================================");
	 * 
	 * Integer empId = Integer.parseInt(req.getParameter("empId")); String empNm =
	 * req.getParameter("empNm"); String empMob = req.getParameter("empMob");
	 * 
	 * EmpVO empVO = new EmpVO(); empVO.setEmpId(empId); empVO.setEmpNm(empNm);
	 * empVO.setEmpMob(empMob);
	 * 
	 * Integer updateCount = service.updateEmp(empVO); log.info("===> updateCount ",
	 * updateCount);
	 * 
	 * Gson gson = new Gson(); JsonObject jso = new JsonObject();
	 * 
	 * EmpVO retVo = null; if (updateCount > 0) { retVo = service.getEmp(empId); }
	 * 
	 * jso.addProperty("totalcount", 1); jso.add("data", gson.toJsonTree(retVo));
	 * 
	 * String strJson = gson.toJson(jso);
	 * 
	 * return String.format("%s", strJson);
	 * 
	 * }
	 */
	@GetMapping(value = "/getEmpPage")
	public String getEmpPage(HttpServletRequest req) throws Exception {

		Integer start = Integer.parseInt(req.getParameter("start"));
		Integer limit = Integer.parseInt(req.getParameter("limit"));

		PageVO pageVO = new PageVO();
		pageVO.setStart(start);
		pageVO.setLimit(limit);

		Gson gson = new Gson();
		JsonObject jso = new JsonObject();

		Integer totalCount = service.getTotalCount();
		List<EmpVO> list = service.getEmpPage(pageVO);

		jso.addProperty("totalcount", totalCount);
		jso.add("data", gson.toJsonTree(list));

		String strJson = gson.toJson(jso);

		return String.format("%s", strJson);
	}
	


}
