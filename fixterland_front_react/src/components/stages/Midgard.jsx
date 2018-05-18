import React from 'react'
export const Midgard =({type_character,x,y, muñequito})=>(
    <div className="World_container">
       <div className="row" id="row1">
           <div className="column used" id="column1-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used " id="column2-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
            </div>
           <div className="column used" id="column3-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column4-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used " id="column5-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used door_closed salida2" id="column6-1">
                <img className="escen" src={require('../media/celiannadoors.png')} alt=""/>
           </div>
           <div className="column used " id="column7-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column8-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column9-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column10-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column11-1">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
       </div>
       <div className="row" id="row2">
           <div className="column used forest1" id="column1-2">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column used forest1" id="column2-2">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
            </div>
           <div className="column used forest1" id="column3-2">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
            </div>
           <div className="column used forest1" id="column4-2">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
            </div>
           <div className="column" id="column5-2">
                {muñequito}
           </div>
           <div className="column way1" id="column6-2">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           </div>
           <div className="column" id="column7-2"></div>
           <div className="column" id="column8-2"></div>
           <div className="column" id="column9-2"></div>
           <div className="column" id="column10-2"></div>
           <div className="column" id="column11-2"></div>
       </div>
       <div className="row" id="row3">
           <div className="column used forest1" id="column1-3">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
            </div>
           <div className="column used forest1" id="column2-3">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
            </div>
           <div className="column forest2" id="column3-3" >
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column forest2" id="column4-3">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column" id="column5-3"></div>
           <div className="column way2" id="column6-3">
                <img className="escen" src={require('../media/way.png')} alt=""/>
            </div>
           <div className="column way3" id="column7-3">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           </div>
           <div className="column" id="column8-3"></div>
           <div className="column" id="column9-3"></div>
           <div className="column used bush" id="column10-3">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column used bush" id="column11-3">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
       </div>
       <div className="row" id="row4">
           <div className="column used forest1" id="column1-4">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column used forest2" id="column2-4">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column" id="column3-4"></div>
           <div className="column used house1" id="column4-4">
                <img className="escen" src={require('../media/house.png')} alt=""/>
          </div>
           <div className="column used house2" id="column5-4">
                <img className="escen" src={require('../media/house.png')} alt=""/>
          </div>
           <div className="column" id="column6-4"></div>
           <div className="column way1" id="column7-4">
                <img className="escen" src={require('../media/way.png')} alt=""/>
          </div>
           <div className="column" id="column8-4"></div>
           <div className="column" id="column9-4"></div>
           <div className="column used bush" id="column10-4">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column used bush" id="column11-4">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
       </div>
       <div className="row" id="row5">
           <div className="column used forest1" id="column1-5">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column used forest2" id="column2-5">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column" id="column3"></div>
           <div className="column used house3" id="column4-5">
                <img className="escen" src={require('../media/house.png')} alt=""/>
         </div>
           <div className="column used house4" id="column5-5">
                <img className="escen" src={require('../media/house.png')} alt=""/>
         </div>
           <div className="column" id="column6-5"></div>
           <div className="column way1" id="column7-5">
                <img className="escen" src={require('../media/way.png')} alt=""/>
          </div>
           <div className="column" id="column8-5"></div>
           <div className="column" id="column9-5"></div>
           <div className="column used bush" id="column10-5">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column used bush" id="column11-5">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
       </div>
       <div className="row" id="row6">
           <div className="column used forest2" id="column1-6">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column forest2" id="column2-6">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column" id="column3-6">
           </div>
           <div className="column used house5" id="column4-6">
                <img className="escen" src={require('../media/house.png')} alt=""/>
        </div>
           <div className="column used house6" id="column5-6">
                <img className="escen" src={require('../media/house.png')} alt=""/>
        </div>
           <div className="column" id="column6-6"></div>
           <div className="column way1" id="column7-6">
                <img className="escen" src={require('../media/way.png')} alt=""/>
          </div>
           <div className="column" id="column8-6"></div>
           <div className="column" id="column9-6"></div>
           <div className="column" id="column10-6"></div>
           <div className="column" id="column11-6"></div>
       </div>
       <div className="row" id="row7">
           <div className="column used forest2" id="column1-7">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column" id="column2-7"></div>
           <div className="column" id="column3-7"></div>
           <div className="column used house7" id="column4-7">
                <img className="escen" src={require('../media/house.png')} alt=""/>
            </div>
           <div className="column used house8" id="column5-7">
                <img className="escen" src={require('../media/house.png')} alt=""/>
            </div>
           <div className="column" id="column6-7"></div>
           <div className="column way1" id="column7-7">
                <img className="escen" src={require('../media/way.png')} alt=""/>
          </div>
           <div className="column" id="column8-7"></div>
           <div className="column" id="column9-7"></div>
           <div className="column" id="column10-7"></div>
           <div className="column used forest2" id="column11-7">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
       </div>
       <div className="row" id="row8">
           <div className="column used forest2" id="column1-8">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column used forest2" id="column2-8">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column" id="column3-8"></div>
           <div className="column way2" id="column4-8">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           </div>
           <div className="column way4" id="column5-8">
                <img className="escen" src={require('../media/way.png')} alt=""/>
           </div>
           <div className="column way4" id="column6-8">
                <img className="escen" src={require('../media/way.png')} alt=""/>
          </div>
           <div className="column way5" id="column7-8">
                <img className="escen" src={require('../media/way.png')} alt=""/>
          </div>
           <div className="column" id="column8-8"></div>
           <div className="column" id="column9-8"></div>
           <div className="column used forest2" id="column10-8">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column used forest2" id="column11-8">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
       </div>
       <div className="row" id="row9">
           <div className="column used forest2" id="column1-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column used forest2" id="column2-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column used forest2" id="column3-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column" id="column4-9"></div>
           <div className="column" id="column5-9"></div>
           <div className="column way1" id="column6-9">
                <img className="escen" src={require('../media/way.png')} alt=""/>
         </div>
           <div className="column" id="column7-9"></div>
           <div className="column" id="column8-9"></div>
           <div className="column" id="column9-9"></div>
           <div className="column used forest2" id="column10-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column used forest2" id="column11-9">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
       </div>
       <div className="row" id="row10">
           <div className="column used forest2" id="column1-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column used forest2" id="column2-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column used forest2" id="column3-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
          </div>
           <div className="column" id="column4-10"></div>
           <div className="column" id="column5-10"></div>
           <div className="column way1" id="column6-10">
                <img className="escen" src={require('../media/way.png')} alt=""/>
         </div>
           <div className="column" id="column7-10"></div>
           <div className="column" id="column8-10"></div>
           <div className="column" id="column9-10"></div>
           <div className="column used forest2" id="column10-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
           <div className="column used forest2" id="column11-10">
                <img className="escen" src={require('../media/arboles2.png')} alt=""/>
           </div>
       </div>
       <div className="row" id="row11">
           <div className="column used" id="column1-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used " id="column2-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
            </div>
           <div className="column used" id="column3-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column4-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used " id="column5-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used door_closed salida2" id="column6-11">
                <img className="escen" src={require('../media/celiannadoors.png')} alt=""/>
           </div>
           <div className="column used " id="column7-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column8-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column9-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column10-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
           <div className="column used" id="column11-11">
                <img className="escen" src={require('../media/walls.png')} alt=""/>
           </div>
       </div>
    </div>
)