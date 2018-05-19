import React from 'react'
export const Midgard =({pos})=>(
    <div className="World_container">
       <div className="row">
           <div className="column" >
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {(!isNaN(pos[0][0])) ? true: pos[0][0]}
           </div>
           <div className="column" >
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {(!isNaN(pos[0][1]) ? true: pos[0][1])}
            </div>
           <div className="column" >
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[0][2]) ? true: pos[0][2]}
           </div>
           <div className="column" >
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[0][3]) ? true: pos[0][3]}
           </div>
           <div className="column " >
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[0][4]) ? true: pos[0][4]}
           </div>
           <div className="column used door_closed salida2">
                <img className="escen" src={require('../media/celiannadoors.png')} alt=""/>
           {!isNaN(pos[0][5])? true: pos[0][5]}
           </div>
           <div className="column used ">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[0][6]) ? true: pos[0][6]}
           </div>
           <div className="column used">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[0][7]) ? true: pos[0][7]}
           </div>
           <div className="column used">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[0][8]) ? true: pos[0][8]}
           </div>
           <div className="column used">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[0][9]) ? true: pos[0][9]}
           </div>
           <div className="column used">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[0][10]) ? true: pos[0][10]}
           </div>
       </div>
       <div className="row" id="row2">
           <div className="column used forest1">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[1][0]) ? true: pos[1][0]}
           </div>
           <div className="column used forest1">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
                {!isNaN(pos[1][1]) ? true: pos[1][1]}
            </div>
           <div className="column used forest1" >
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[1][2]) ? true: pos[1][2]}
            </div>
           <div className="column used forest1">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
                {!isNaN(pos[1][3]) ? true: pos[1][3]}
            </div>
           <div className="column" >
           {!isNaN(pos[1][4]) ? true: pos[1][4]}
           </div>
           <div className="column way1">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[1][5]) ? true: pos[1][5]}
           </div>
           <div className="column">
           {!isNaN(pos[1][6]) ? true: pos[1][6]}
           </div>
           <div className="column">
           {!isNaN(pos[1][7]) ? true: pos[1][7]}
           </div>
           <div className="column">
           {!isNaN(pos[1][8])? true: pos[1][8]}
           </div>
           <div className="column" >
           {!isNaN(pos[1][9]) ? true: pos[1][9]}
           </div>
           <div className="column" >
           {!isNaN(pos[1][10]) ? true: pos[1][10]}
           </div>
       </div>
       <div className="row" id="row3">
           <div className="column used forest1">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[2][0]) ? true: pos[2][0]}
            </div>
           <div className="column used forest1" >
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[2][1]) ? true: pos[2][1]}
            </div>
           <div className="column forest2">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[2][2]) ? true: pos[2][2]}
           </div>
           <div className="column forest2" >
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[2][3]) ? true: pos[2][3]}
           </div>
           <div className="column" >
           {!isNaN(pos[2][4]) ? true: pos[2][4]}
           </div>
           <div className="column way2">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[2][5]) ? true: pos[2][5]}
            </div>
           <div className="column way3" >
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[2][6]) ? true: pos[2][6]}
           </div>
           <div className="column" >
           {!isNaN(pos[2][7]) ? true: pos[2][7]}
           </div>
           <div className="column" >
           {!isNaN(pos[2][8]) ? true: pos[2][8]}
           </div>
           <div className="column used bush">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[2][9]) ? true: pos[2][9]}
           </div>
           <div className="column used bush" id="column11-3">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[2][10]) ? true: pos[2][10]}
           </div>
       </div>
       <div className="row" id="row4">
           <div className="column used forest1" id="column1-4">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[3][0]) ? true: pos[3][0]}
           </div>
           <div className="column used forest2" id="column2-4">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[3][1]) ? true: pos[3][1]}
           </div>
           <div className="column" id="column3-4">
           {!isNaN(pos[3][2]) ? true: pos[3][2]}
           </div>
           <div className="column used house1" id="column4-4">
                <img className="escen" src={require('../media/house.png')} alt=""/>
           {!isNaN(pos[3][3]) ? true: pos[3][3]}
          </div>
           <div className="column used house2" id="column5-4">
                <img className="escen" src={require('../media/house.png')} alt=""/>
           {!isNaN(pos[3][4]) ? true: pos[3][4]}
          </div>
           <div className="column" id="column6-4">
           {!isNaN(pos[3][5]) ? true: pos[3][5]}
           </div>
           <div className="column way1" id="column7-4">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[3][6]) ? true: pos[3][6]}
          </div>
           <div className="column" id="column8-4">
           {!isNaN(pos[3][7]) ? true: pos[3][7]}
           </div>
           <div className="column" id="column9-4">
           {!isNaN(pos[3][8]) ? true: pos[3][8]}
           </div>
           <div className="column used bush" id="column10-4">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[3][9]) ? true: pos[3][9]}
           </div>
           <div className="column used bush" id="column11-4">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[3][10]) ? true: pos[3][10]}
           </div>
       </div>
       <div className="row" id="row5">
           <div className="column used forest1" id="column1-5">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[4][0]) ? true: pos[4][0]}
           </div>
           <div className="column used forest2" id="column2-5">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[4][1]) ? true: pos[4][1]}
           </div>
           <div className="column" id="column3">
           {!isNaN(pos[4][2]) ? true: pos[4][2]}
           </div>
           <div className="column used house3" id="column4-5">
                <img className="escen" src={require('../media/house.png')} alt=""/>
           {!isNaN(pos[4][3]) ? true: pos[4][3]}
         </div>
           <div className="column used house4" id="column5-5">
                <img className="escen" src={require('../media/house.png')} alt=""/>
           {!isNaN(pos[4][4]) ? true: pos[4][4]}
         </div>
           <div className="column" id="column6-5">
           {!isNaN(pos[4][5]) ? true: pos[4][5]}
           </div>
           <div className="column way1" id="column7-5">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[4][6]) ? true: pos[4][6]}
          </div>
           <div className="column" id="column8-5">
           {!isNaN(pos[4][7]) ? true: pos[4][7]}
           </div>
           <div className="column" id="column9-5">
           {!isNaN(pos[4][8]) ? true: pos[4][8]}
           </div>
           <div className="column used bush" id="column10-5">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[4][9]) ? true: pos[4][9]}
           </div>
           <div className="column used bush" id="column11-5">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[4][10]) ? true: pos[4][10]}
           </div>
       </div>
       <div className="row" id="row6">
           <div className="column used forest2" id="column1-6">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[5][0]) ? true: pos[5][0]}
           </div>
           <div className="column forest2" id="column2-6">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[5][1]) ? true: pos[5][1]}
           </div>
           <div className="column" id="column3-6">
           {!isNaN(pos[5][2]) ? true: pos[5][2]}
           </div>
           <div className="column used house5" id="column4-6">
                <img className="escen" src={require('../media/house.png')} alt=""/>
           {!isNaN(pos[5][3]) ? true: pos[5][3]}
        </div>
           <div className="column used house6" id="column5-6">
                <img className="escen" src={require('../media/house.png')} alt=""/>
           {!isNaN(pos[5][4]) ? true: pos[5][4]}
        </div>
           <div className="column" id="column6-6">
           {!isNaN(pos[5][5]) ? true: pos[5][5]}
           </div>
           <div className="column way1" id="column7-6">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[5][6]) ? true: pos[5][6]}
          </div>
           <div className="column" id="column8-6">
           {!isNaN(pos[5][7]) ? true: pos[5][7]}
         </div>
           <div className="column" id="column9-6">
           {!isNaN(pos[5][8]) ? true: pos[5][8]}
         </div>
           <div className="column" id="column10-6">
           {!isNaN(pos[5][9]) ? true: pos[5][9]}
         </div>
           <div className="column" id="column11-6">
           {!isNaN(pos[5][10]) ? true: pos[5][10]}
         </div>
       </div>
       <div className="row" id="row7">
           <div className="column used forest2" id="column1-7">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[6][0]) ? true: pos[6][0]}
          </div>
           <div className="column" id="column2-7">
           {!isNaN(pos[6][1]) ? true: pos[6][1]}
           </div>
           <div className="column" id="column3-7">
           {!isNaN(pos[6][2]) ? true: pos[6][2]}
           </div>
           <div className="column used house7" id="column4-7">
                <img className="escen" src={require('../media/house.png')} alt=""/>
           {!isNaN(pos[6][3]) ? true: pos[6][3]}
            </div>
           <div className="column used house8" id="column5-7">
                <img className="escen" src={require('../media/house.png')} alt=""/>
           {!isNaN(pos[6][4]) ? true: pos[6][4]}
            </div>
           <div className="column" id="column6-7">
           {!isNaN(pos[6][5]) ? true: pos[6][5]}
           </div>
           <div className="column way1" id="column7-7">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[6][6]) ? true: pos[6][6]}
          </div>
           <div className="column" id="column8-7">
           {!isNaN(pos[6][7]) ? true: pos[6][7]}
           </div>
           <div className="column" id="column9-7">
           {!isNaN(pos[6][8]) ? true: pos[6][8]}
           </div>
           <div className="column" id="column10-7">
           {!isNaN(pos[6][9]) ? true: pos[6][9]}
          </div>
           <div className="column used forest2" id="column11-7">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[6][10]) ? true: pos[6][10]}
          
           </div>
       </div>
       <div className="row" id="row8">
           <div className="column used forest2" id="column1-8">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[7][0]) ? true: pos[7][0]}
          </div>
           <div className="column used forest2" id="column2-8">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[7][1]) ? true: pos[7][1]}
          </div>
           <div className="column" id="column3-8">
           {!isNaN(pos[7][2]) ? true: pos[7][2]}
          </div>
           <div className="column way2" id="column4-8">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[7][3])? true: pos[7][3]}
           </div>
           <div className="column way4" id="column5-8">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[7][4]) ? true: pos[7][4]}
           </div>
           <div className="column way4" id="column6-8">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[7][5]) ? true: pos[7][5]}
          </div>
           <div className="column way5" id="column7-8">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[7][6]) ? true: pos[7][6]}
          </div>
           <div className="column" id="column8-8">
           {(!isNaN(pos[7][7])  ? true: pos[7][7])}
           </div>
           <div className="column" id="column9-8">
           {!isNaN(pos[7][8]) ? true: pos[7][8]}</div>
           <div className="column used forest2" id="column10-8">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[7][9]) ? true: pos[7][9]}
          </div>
           <div className="column used forest2" id="column11-8">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[7][10]) ? true: pos[7][10]}
          </div>
       </div>
       <div className="row" id="row9">
           <div className="column used forest2" id="column1-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[8][0]) ? true: pos[8][0]}
          </div>
           <div className="column used forest2" id="column2-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[8][1])? true: pos[8][1]}
          </div>
           <div className="column used forest2" id="column3-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[8][2]) ? true: pos[8][2]}
          </div>
           <div className="column" id="column4-9">
           {!isNaN(pos[8][3]) ? true: pos[8][3]}</div>
           <div className="column" id="column5-9">
           {!isNaN(pos[8][4]) ? true: pos[8][4]}</div>
           <div className="column way1" id="column6-9">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[8][5]) ? true: pos[8][5]}
         </div>
           <div className="column" id="column7-9">
           {!isNaN(pos[8][6]) ? true: pos[8][6]}
           </div>
           <div className="column" id="column8-9">
           {!isNaN(pos[8][7]) ? true: pos[8][7]}
           </div>
           <div className="column" id="column9-9">
           {!isNaN(pos[8][8]) ? true: pos[8][8]}
           </div>
           <div className="column used forest2" id="column10-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[8][9]) ? true: pos[8][9]}
           </div>
           <div className="column used forest2" id="column11-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[8][10]) ? true: pos[8][10]}
           </div>
       </div>
       <div className="row" id="row10">
           <div className="column used forest2" id="column1-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[9][0]) ? true: pos[9][0]}
          </div>
           <div className="column used forest2" id="column2-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[9][1]) ? true: pos[9][1]}
          </div>
           <div className="column used forest2" id="column3-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[9][2]) ? true: pos[9][2]}
          </div>
           <div className="column" id="column4-10">
           {!isNaN(pos[9][3])? true: pos[9][3]}
           </div>
           <div className="column" id="column5-10">
           {!isNaN(pos[9][4]) ? true: pos[9][4]}
           </div>
           <div className="column way1" id="column6-10">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           {!isNaN(pos[9][5]) ? true: pos[9][5]}
         </div>
           <div className="column" id="column7-10">
           {!isNaN(pos[9][6])? true: pos[9][6]}
           </div>
           <div className="column" id="column8-10">
           {!isNaN(pos[9][7]) ? true: pos[9][7]}</div>
           <div className="column" id="column9-10">
           {!isNaN(pos[9][8]) ? true: pos[9][8]}</div>
           <div className="column used forest2" id="column10-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[9][9]) ? true: pos[9][9]}
           </div>
           <div className="column used forest2" id="column11-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           {!isNaN(pos[9][10]) ? true: pos[9][10]}
           </div>
       </div>
       <div className="row" id="row11">
           <div className="column used" id="column1-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][0]) ? true: pos[10][0]}
           </div>
           <div className="column used " id="column2-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][1]) ? true: pos[10][1]}
            </div>
           <div className="column used" id="column3-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][2]) ? true: pos[10][2]}
           </div>
           <div className="column used" id="column4-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][3]) ? true: pos[10][3]}
           </div>
           <div className="column used " id="column5-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][4])? true: pos[10][4]}
           </div>
           <div className="column used door_closed salida2" id="column6-11">
                <img className="escen" src={require('../media/celiannadoors.png')} alt=""/>
           {!isNaN(pos[10][5]) ? true: pos[10][5]}
           </div>
           <div className="column used " id="column7-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][6]) ? true: pos[10][6]}
           </div>
           <div className="column used" id="column8-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][7]) ? true: pos[10][7]}
           </div>
           <div className="column used" id="column9-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][8]) ? true: pos[10][8]}
           </div>
           <div className="column used" id="column10-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][9]) ? true: pos[10][9]}
           </div>
           <div className="column used" id="column11-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           {!isNaN(pos[10][10]) ? true: pos[10][10]}
           </div>
       </div>
    </div>
)