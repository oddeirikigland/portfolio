import  React, { Component } from "react";
import * as THREE from "three";

var camera, scene, renderer;
var geometry, material, mesh;
var line, light;
 
 
function init() {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
 
    scene = new THREE.Scene();
    scene.background = new THREE.Color("lightgray")

    light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 0, 20, 10 );
    scene.add( light );
                
 
    geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
    material = new THREE.MeshNormalMaterial();
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
}
 
function animate() {
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.05;
    mesh.rotation.y += 0.00;
 
    renderer.render( scene, camera );
 
}

export default class Animation extends Component {
    componentDidMount() {
        init();
        animate();
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}