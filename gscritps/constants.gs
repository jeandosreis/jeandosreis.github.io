* Constants.gs
*-----------------------------------------------------------------------
*-----------------------------------------------------------------------
* Leo Kroon (leo.kroon@wur.nl) / Wageningen University MAQ 
* 01/oct/03
* Script to define the constants used throughout most scripts in the
* Dynamic library. It is advisable to copy this script to the GrADS
* directory  /Program Files/PCGrADS/win32e/
*
* Invoke this script by starting each script with "run constants.gs"
* Note ALL(!) constants are in S.I. units
*-----------------------------------------------------------------------
*-----------------------------------------------------------------------
*
* Define constants
*
* Degrees to radian and vice versa
*
"define d2r    = 3.1415/180"
"define r2d    = 180/3.1415"
*
* Earth radius (m)
*
"define rearth = 6.37e6"
*
*
* Earth's rotation rate
*
"define rot = 7.292e-5"
*
* Acceleration of gravity (m/s2)
*
"define grav   = 9.81"
*
* Gasconstant for dry air (J kg-1 K-1)
*
"define rdry = 287.04"
*
* Specific heat of air at constant pressure (J kg-1 K-1)
*
"define cp = 1004"
*
* Coriolis parameter functions
*
"define fcor = 2*rot*sin(lat*d2r)"
"define beta = 2*rot*cos(lat*d2r)/rearth"
*
