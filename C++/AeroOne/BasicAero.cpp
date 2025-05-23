#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;
	//add class for space
	//add wind speed
	//add changing wind direction and speed

class fallingObject {
	public:
		string name;
		double Cd;
		double A;
		double m;
};

/**
 * droppedObject - prints the distance fallen of an object at sea level
 */
void droppedObject(fallingObject obj, double dt, double t_total)
{
	// d = .5*at^2 + v0*t + d0
	// v = at
	// force of drag: 0.5 p*v^2*Csubd*A, p is density of fluid, 
	// v speed of object rel to fluid, Csubd drag coefficient, A cross-sectional Area

	double vel = 0, g = 9.81, y_pos_m = 0.0, vel_zero = 0, y_pos_ft, acc_drag, t;
	double p = 1.225;

	cout << "\tVERTICAL DROP DISTANCE\n\n";
	cout << "GRAVITY ONLY\n\n";
	for (t = 0; t <= 10; t++)
	{
		y_pos_m = -0.5 * g * pow(t, 2);
		cout << "At "<< t <<" seconds currently at location " << fixed <<
		setprecision(0) << y_pos_m << " meters." << endl;
	}

	cout << endl << "WITH AIR RESISTANCE" << endl << endl;

	double v = 0.0, Fd, a, y, tolerance = 1e-6;
	double vel_term = sqrt(2 * obj.m * g / (p * obj.Cd * obj.A)); //terminal velocity
	//Numeric Falling Object Sim
	for (t = 0; t <= t_total; t += dt)
	{
		Fd = 0.5 * p * obj.Cd * obj.A * pow(v, 2);
		a = -1 * (g - Fd / obj.m);
		v += a * dt;
		y += v * dt;

		if (abs(round(t) - t) < tolerance)
			cout << "At "<< t <<" seconds currently at location " << fixed <<
			setprecision(0) << y << " meters." << endl;
	}
}

int main()
{
	fallingObject bowlingBall;

	bowlingBall.name = "Bowling Ball";
	bowlingBall.Cd = 0.45;
	bowlingBall.A = 0.038;
	bowlingBall.m = 6.62;

	droppedObject(bowlingBall, 0.001, 10);

	return 0;
}
