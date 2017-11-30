//
//  Exercicio_2.swift
//  EstudoCommand
//
//  Created by Gabriel on 29/11/17.
//  Copyright © 2017 Gabriel. All rights reserved.
//

import Foundation
class Solution{
    public static func solution(a:[Int])->Int{
        //Dicionario contendo uma boleana indicando se o numero possui ocorrencias em cada posicao i do array
        var ocorrencias = [Int:Bool]()
        for i in 0...a.count-1{
            let num = a[i]
            if ocorrencias[num]==nil{
                ocorrencias[num] = true
            }
        }
        return ocorrencias.count
    }
}
