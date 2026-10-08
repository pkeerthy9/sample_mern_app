from fastapi import FastAPI
app=FastAPI()

@app.get("/getStudents")
def getStudents():
    return "get student method called"

#localhost:8000/addStudents =>post
@app.post("/addStudents")
def addStudents():
    return "add student method called"

#localhost:8000/updatestudent
@app.put("/updatestudent")
def updatestudent():
    return "update student method is called"

#localhost:8000/deletestudent
@app.delete("/deletestudent")
def deletestudent():
    return "student data is deleted"