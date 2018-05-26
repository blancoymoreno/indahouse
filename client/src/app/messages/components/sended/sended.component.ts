import {Component, OnInit, DoCheck} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../../../models/messages';
import { MessageService } from '../../../services/message.service';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { GLOBAL } from '../../../services/global';

@Component({
    selector: 'sended',
    templateUrl: './sended.component.html',
    providers: [MessageService, UserService]
})
export class SendedComponent implements OnInit{
    public title: string;
    public messages: Message[];
    public identity;
    public token;
    public url: string;
    public alertMessage;
    public status: string;
    public user: User;
    public users: User[];
    public pages;
    public total;
    public page;
    public next_page;
    public prev_page;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _messageService: MessageService,
        private _userService: UserService
    ){
        this.title = 'Mensajes enviados';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }
    ngOnInit(){
        console.log('sended.component cargado');
        this.actualPage();
        
    }
    getMessages(token, page){
        this._messageService.getEmmitMessages(token, page).subscribe(
            response => {
                if(!response.messages){
                    
                } else {
                    this.messages = response.messages;
                    this.total = response.total;
                    this.pages = response.pages;
                    if(page > this.pages){
                        this._router.navigate(['/mis-mensajes/enviados']);
                    }
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
    actualPage(){
        this._route.params.subscribe(params => {
            let page = +params['page'];
            this.page = page;
            if(!params['page']){
                page = 1;
            }
            if(!page){
                page = 1;
            }else{
                this.next_page = page+1;
                this.prev_page = page-1;

                if(this.prev_page <= 0){
                    this.prev_page = 1;
                }
            }
            this.getMessages(this.token, this.page);
        });
    }
}