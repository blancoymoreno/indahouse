import {Component, OnInit, DoCheck} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../../../models/messages';
import { MessageService } from '../../../services/message.service';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';

@Component({
    selector: 'add',
    templateUrl: './add.component.html',
    providers: [MessageService, UserService]
})
export class AddComponent implements OnInit{
    public title: string;
    public message: Message;
    public identity;
    public token;
    public url: string;
    public alertMessage;
    public status: string;
    public user: User;
    public users: User[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _messageService: MessageService,
        private _userService: UserService

    ){
        this.title = 'Enviar mensaje';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.user = this.identity;
        this.message = new Message('','','','',this.identity._id,'');
    }
    ngOnInit(){
        console.log('add.component cargado');
        this.getUsers();
    }
    onSubmit(form){
        console.log(this.users);
        this._messageService.addMessage(this.token, this.message).subscribe(
            response =>{
                if(response.message){
                    this.status = 'success';
                    form.reset();
                }
            },
            error => {
                this.status = 'error';
                console.log(<any>error);
            }
        );
    }
    getUsers(){
        this._userService.getUsers(this.token).subscribe(
            response => {
               if(!response.users){
                    this.alertMessage = 'no hay usuarios';
               }else{
                    this.users = response.users;
               }
            }
            ,error => {
                var errorMessage = <any>error;
    
                if(errorMessage != null){
                  var errorbody = JSON.parse(error._body);
                 //this.alertMessage = errorbody.message;
                  console.log(error);
                }
            });
    }
}