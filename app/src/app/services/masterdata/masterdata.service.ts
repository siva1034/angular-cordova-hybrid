/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveuserresponse } from 'app/sd-services/saveuserresponse';
@Injectable()
export class masterdataService {
public username:string

public password:string
public answer1:string
public answer2:string
public answer3:string
public questionId:string
public questionId2:string
public questionId3:string
public certifyInfoName: string
public certifyInfoChecked:string
public locationName:string;
public phone:string;
public shortTextOne:string;
public shortTextTwo:string;
public shortTextThree:string;
public addlInfo:string;

// creating serverurl variable we can define it env.json and access here



constructor(private http: HttpClient,private saveuserService:saveuserresponse) {}


async userSubmit(){
    console.log(JSON.parse(localStorage.getItem('answer1')));
    let answer1  = this.answer1;
    let answer2  = this.answer2;
    let answer3  = this.answer3;
    let UpdatedlocationName = this.locationName;
    let UcertifyInfoName = this.certifyInfoName;
    let UcertifyInfoCheck = this.certifyInfoChecked;
    try {
        console.log(this.username);
          let formdata = {
                type:"employee",
                locationName: UpdatedlocationName,
                email:this.username,
                phone:localStorage.getItem('phone'),
                firstName:"st peter",
                lastName:"henry",
                company:"blucocondigital",
                ingredionContact:"none",
                certifyInfoName:UcertifyInfoName,
                certifyInfoChecked:UcertifyInfoCheck,
                  response:[{
                             "questionId": this.questionId, "answer": this.answer1,  "shortText": this.shortTextOne
                        },{
                            "questionId": this.questionId2, "answer": this.answer2,  "shortText": this.shortTextTwo
                        },{
                            "questionId": this.questionId3, "answer": this.answer3,  "shortText": this.shortTextThree
                        }
                    ],
            };
        console.log(formdata);
        let bh = await this.saveuserService.saveUserData(formdata)
        console.log(bh.local.result);
       return bh.local.result;

    } catch(err){
        // this.isLoading = false
        console.log(err)
    }
}
}
 console.log(localStorage.getItem('answer1'),localStorage.getItem('answer2'),localStorage.getItem('answer3'));
 var confirmdetailsObj = JSON.parse(localStorage.getItem('confirmdetails'));



    
