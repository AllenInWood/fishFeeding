//the distance between fish and fruits
function monFruitsCollision()
{
	for (var i = 0; i < fruit.num; i++)
	{
		if(fruit.alive[i])
		{
			//calculate length
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y)
			if(l < 900)
			{
				//fruits eaten
				fruit.dead(i);
			}
		}
	}
}