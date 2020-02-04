import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
});

observable.pipe(map((val:any) => val.toUpperCase()));
observable.subscribe((x:any) => addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}