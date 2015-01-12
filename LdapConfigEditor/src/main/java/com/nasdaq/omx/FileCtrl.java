/**
 * 
 */
package com.nasdaq.omx;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author Abel
 * @date 13 Jan 2015
 */
@Controller
public class FileCtrl {
	@RequestMapping("/config.json")
	public void download(@RequestParam("json") String json,
			HttpServletResponse response) throws UnsupportedEncodingException,
			IOException {
		System.out.println(json);
		response.setContentType("application/json");
		response.setHeader("Content-Disposition",
				"attachment; filename=\"config.json\"");
		response.getOutputStream().write(json.getBytes("utf-8"));
		response.flushBuffer();
	}
}
