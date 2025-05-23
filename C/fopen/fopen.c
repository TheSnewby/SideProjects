#include <stdio.h>
#include <string.h>

static int numOne = 0;
static int numTwo = 0;
static int numThree = 0;

void one();
void two();
void three();

void one()
{
	numOne++;
	two();
	three();
}

void two()
{
	numTwo++;
	three();
}

void three()
{
	numThree++;
}

int main() {
	one();
	two();
	three();

	printf("numOne: %d\nnumTwo: %d\nnumThree: %d\n", numOne, numTwo, numThree);

	char data[6];

	FILE *file = fopen("data.txt", "w");
	sprintf(data, "%d %d %d", numOne, numTwo, numThree);

	fwrite(data, sizeof(char), strlen(data), file);
	fclose(file);

	return 0;
}