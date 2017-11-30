//
//  Exercicio_1.swift
//  EstudoCommand
//
//  Created by Gabriel on 29/11/17.
//  Copyright © 2017 Gabriel. All rights reserved.
//

import Foundation
class Solution{
    public static func solution(a:[Int]) -> Int{
        //Dicionario contendo todas as ocorrencias de um numero presente em cada posicao i do array
        var ocorrencias = [Int:Int]()
        for i in 0...a.count-1{
            let num = a[i]
            
            //Calcula ocorrencias para o numero extraido da posicao i do array a
            if ocorrencias[num] != nil{
                let val = ocorrencias[num]! + 1
                ocorrencias[num] = val
            }else{
                ocorrencias[num] = 1
            }
        }
        
        //Percorre as ocorrencias e verifica qual numero nao apareceu mais que uma vez
        for oc in ocorrencias{
            if oc.value==1 {
                return oc.key
            }
        }
        return -1
    }
}
