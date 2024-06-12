<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(2),
            'description' => fake()->sentence(),
            'price' => fake()->randomFloat(2, 0, 1000),
            'image' => fake()->imageUrl(640, 480),
            'rating' => fake()->randomFloat(1, 0, 5),
            'reserved' => fake()->boolean(),
        ];
    }

}
