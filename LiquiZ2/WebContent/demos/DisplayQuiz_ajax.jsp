<%
String id = request.getParameter("quizid");
Quiz quiz = Quiz.find(id);
quiz.writeJS();
%>