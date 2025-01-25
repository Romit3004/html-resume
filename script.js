var summary = {
    1 : "SUMMARY" ,
    2 : "Dedicated and highly motivated Computer Engineering graduate with a foundation in software development, Proficient in multiple programming languages, including Python, C++ and Java. Experienced in colleges project based learning with a focus on developing innovative solutions through teamwork and independent projects."
}


var skills = ["Internship was of two months in Dombivali after the 4th Sem holidays. During the internship we had performed many tasks." , "C" , "C++", "HTML,CSS and Javascript"] ;

var workExperience = {
    1 : "WORK EXPERIENCE" ,
    2 : "Internship from college side SMART BYTE (Web development) :" ,
    3 : skills[0] ,
    4 : "SKILLS" ,
    5 : skills 
}


var e1 = ["Saboo Siddik Polytechnic Byculla 400010", "5th Sem result : 80.89%"] ;
var e2 = ["5th Sem result : 80.89%"] ;

var education = {
    1 : "EDUCATION" ,
    2 : "Diploma in Computer Science / engineering completed :- Oct 2021 - May 2024" ,
    3 : "" ,
    4 : e1 ,
    5 : "SSC Completed :- JUNE 2021" ,
    6 : "JUNE 2021" ,
    7 : e2
}


var information  = ["Date of Birth : 30/10/2005" , "Nationality : India" , "GENDER : Male"]

var personalInformation = {
    1 : "PERSONAL INFORMATION" , 
    2 : information 
}

console.log(Object.values(summary)[0]) ;
console.log(Object.values(summary)[1]) ;


console.log(Object.values(workExperience)[0]) ;
console.log(Object.values(workExperience)[1]) ;
console.log(Object.values(workExperience)[2]) ;
console.log(Object.values(workExperience)[3]) ;
console.log(Object.values(workExperience)[4][1]) ;
console.log(Object.values(workExperience)[4][2]) ;
console.log(Object.values(workExperience)[4][3]) ;


console.log(Object.values(education)[0]) ;
console.log(Object.values(education)[1]) ;
console.log(Object.values(education)[3][0]) ;
console.log(Object.values(education)[3][1]) ;
console.log(Object.values(education)[4]) ;
console.log(Object.values(education)[6][0]) ;


console.log(Object.values(personalInformation)[0]) ;
console.log(Object.values(personalInformation)[1][0]) ;
console.log(Object.values(personalInformation)[1][1]) ;
console.log(Object.values(personalInformation)[1][2]) ;