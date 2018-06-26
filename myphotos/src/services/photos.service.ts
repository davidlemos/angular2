import { Injectable} from '@angular/core'
import firebase from 'firebase'

@Injectable()
export class PhotoService{
    
    DATA_URL = firebase.storage.StringFormat.DATA_URL
    
    constructor(){

    }

    getFirebaseReferenceFromChild(resourceName){
        let storageRef = firebase.storage().ref();
        let resourceRef = storageRef.child(resourceName)
        return resourceRef;
    }

}