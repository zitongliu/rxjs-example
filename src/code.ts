import { Observable } from 'rxjs';

var observable = Observable.create(function subscribe(observer: any) {
    try {
        // Emitt a value to the observer
        observer.next('Hey guys!');
        observer.next('How are you?');
        observer.complete();
        observer.next('THIS WILL NOT SEND');    
    } catch (err) {
        observer.error(err)
    }
});


// observable.subscribe((x: any) => console.log(x));
observable.subscribe(
    (x: any) => addItem(x),    
    (error: any) => addItem(error),
    () => addItem('Completed')
);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

//  BehaviorSubject
// ReplaySubject