# Pong

## Specifications.

The screen aspect ratio is 4:3.

There are two paddles.
Paddle height is 25% of the height of the play area.
Paddle width is 2% of the width of the play area.

The paddle on the left is controlled by the player.
At start of the round, the position of the paddle is set to 15% from the bottom of the play area.

The paddle on the right is controlled by the CPU.
At start of the round, the position of the paddle is set to 15% from the top of the play area.

There is a circular ball.
The radius of the ball is 2% of the width of the play area.
At the start of the round, the ball is set at the middle of the play area. The center of the ball must be directly above center of the play area.

At the start of each round, no movement takes place until the player presses a movement key.
When the player presses a movement key for the first time, the ball's X and Y velocities are set to random values.

The ball can bounce off the top and bottom walls of the play area, as well as off the paddles.

If the ball touches the right wall, a point is awarded to the player.
If the ball touches the left wall, a point is awarded to the CPU.

The point counter floats below the play area at the top of the screen. The ball passes over the point counter without colliding.
The point counter has 1 digit.

A vertical dashed line, representing a net, passes through the center of the play area. The ball passes through the net without colliding.

The first player to reach 10 points wins.
