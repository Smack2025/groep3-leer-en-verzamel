import boom from '../assets/woorden/boom.svg'
import boek from '../assets/woorden/boek.svg'
import kat from '../assets/woorden/kat.svg'
import vis from '../assets/woorden/vis.svg'
import tafel from '../assets/woorden/tafel.svg'
import hond from '../assets/woorden/hond.svg'
import school from '../assets/woorden/school.svg'
import brood from '../assets/woorden/brood.svg'
import leesboek from '../assets/woorden/zin_leesboek.svg'
import katopmat from '../assets/woorden/zin_kat_op_mat.svg'

export const words = [
  { id:'w_boom', woord:'boom', correct: {label:'boom', img: boom}, options:[{label:'boom', img: boom},{label:'boek', img: boek},{label:'kat', img: kat}] , level:1 },
  { id:'w_boek', woord:'boek', correct: {label:'boek', img: boek}, options:[{label:'boek', img: boek},{label:'boom', img: boom},{label:'vis', img: vis}], level:1 },
  { id:'w_kat', woord:'kat', correct: {label:'kat', img: kat}, options:[{label:'kat', img: kat},{label:'hond', img: hond},{label:'vis', img: vis}], level:1 },
  { id:'w_vis', woord:'vis', correct: {label:'vis', img: vis}, options:[{label:'vis', img: vis},{label:'kat', img: kat},{label:'boek', img: boek}], level:1 },
  { id:'w_tafel', woord:'tafel', correct: {label:'tafel', img: tafel}, options:[{label:'tafel', img: tafel},{label:'school', img: school},{label:'brood', img: brood}], level:2 },
  { id:'w_hond', woord:'hond', correct: {label:'hond', img: hond}, options:[{label:'hond', img: hond},{label:'kat', img: kat},{label:'vis', img: vis}], level:2 },
  { id:'w_school', woord:'school', correct: {label:'school', img: school}, options:[{label:'school', img: school},{label:'boek', img: boek},{label:'tafel', img: tafel}], level:2 },
  { id:'w_brood', woord:'brood', correct: {label:'brood', img: brood}, options:[{label:'brood', img: brood},{label:'kaas', img: brood},{label:'boek', img: boek}], level:2 },
  { id:'w_zin1', woord:'ik lees een boek', correct: {label:'ik lees een boek', img: leesboek}, options:[{label:'ik lees een boek', img: leesboek},{label:'ik eet brood', img: brood},{label:'ik ga naar school', img: school}], level:3 },
  { id:'w_zin2', woord:'de kat ligt op de mat', correct: {label:'de kat ligt op de mat', img: katopmat}, options:[{label:'de kat ligt op de mat', img: katopmat},{label:'de hond rent', img: hond},{label:'ik lees een boek', img: leesboek}], level:3 },
]
