import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'chunk'})
export class ChunkPipe implements PipeTransform {
    transform(array: Array<any>, size: number): Array<any> {
        const result = this.chunk(array, size);
        return result;
    }

    chunk(array: Array<any>, size): Array<any> {
        const chunkedArr = [];
        const copied = [...array];
        const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer
        for (let i = 0; i < numOfChild; i++) {
            chunkedArr.push(copied.splice(0, size));
        }
        return chunkedArr;
    }

}
