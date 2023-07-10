import { Injectable } from "@angular/core";
import { Iuser } from "./user.model";

@Injectable()
export class AuthService{
    currentUser:Iuser
    loginUser(userName:string,password:string){
        this.currentUser = {
            id:1,
            userName:'Mj',
            firstName:'Mohit',
            lastName:'Jain'

        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(firstName:string,lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}