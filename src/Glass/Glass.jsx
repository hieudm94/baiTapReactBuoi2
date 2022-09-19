import React, { Component } from 'react'

export default class Glass extends Component {

    producGlassList = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state ={
        glassesTest:{
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }


    renderListGlass = () => {
        return this.producGlassList.map((glass) => {
            let {id} = glass
            return <img style={{width:"100px",cursor:"pointer"}} key={`glass-${id}`} src={glass.url} alt='' className='m-3 p-2' onClick={() => { this.renderChangeGlass(glass) }} ></img>
        })
    }

    renderChangeGlass = (newGlasses) =>{
        this.setState({
            glassesTest:newGlasses
        })
    }

    render() {
        return (
            <div style={{ backgroundImage: "url(./img/background.jpg)", height: "2000px" }} >
                <div>
                    <h2 style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className='text-center p-5'>TRY GLASSES APP ONLINE</h2>
                    <div className='container'>
                        <div className="row justify-content-between ">
                            <div className="col-4">
                                <div className='position-relative'>
                                    <img className="position-absolute img-fluid" src="./img/model.jpg"  alt="" />
                                    <img style={{width:"180px",top:"103px",left:"86px" }} src={this.state.glassesTest.url} alt="" className='position-absolute' />
                                    <div className='glassInfor position-relative p-2' style={{top:"280px",height:"150px" ,backgroundColor:"rgba(139, 195, 74, 50% )"}}>
                                        <h3 className='font-weight-bold'>{this.state.glassesTest.name}</h3>
                                        <p style={{lineHeight:"1.5"}}>{this.state.glassesTest.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <img src="./img/model.jpg" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-warning container mt-5 d-flex justify-content-center '>
                        {this.renderListGlass()}
                    </div>
                </div>


            </div>
        )
    }
}
