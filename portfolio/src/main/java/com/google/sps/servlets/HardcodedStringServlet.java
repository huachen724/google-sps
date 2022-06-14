package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/** Servlet that responds with the current date. */
@WebServlet("/string")
public class HardcodedStringServlet extends HttpServlet {
  //hardcoded array with three objects in arraylist
  ArrayList<String> random = new ArrayList<>(Arrays.asList("I spend a lot of time browsing TikTok", 
                                                            "I am turning 21 this November!", 
                                                            "I like to run when I have time"));
  @Override 
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println(convertToJsonUsingGson(random));
  }
  //convert the arraylist to json
  private String convertToJsonUsingGson(ArrayList<String> string) {
    Gson gson = new Gson();
    String json = gson.toJson(string);
    return json;
  }
}
