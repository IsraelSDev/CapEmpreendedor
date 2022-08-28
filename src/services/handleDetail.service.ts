import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "src/models/user.model";

@Injectable()
export class HandleDetailService {


    user: any = {};

    constructor() { }

    getUser(): any {
        return this.user;
    }

    setUserToDetail(user: User) {
        this.user = user;
    }

}
