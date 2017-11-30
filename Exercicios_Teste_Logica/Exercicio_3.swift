//
//  Exercicio_3.swift
//  EstudoCommand
//
//  Created by Gabriel on 29/11/17.
//  Copyright © 2017 Gabriel. All rights reserved.
//

import Foundation
class Solution{
    public static func solution(n:Int, m:Int)->Int{
        //Inicializa numeros de chocolate em 1, pois ja comeu o chocolate do index 0
        var chocolates = 1
        //Atualiza index
        var index = (0 + m)%n
        
        while index != 0{
            index = (index + m)%n
            chocolates+=1
        }
        return chocolates
    }
}
