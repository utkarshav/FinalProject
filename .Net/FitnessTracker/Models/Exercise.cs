using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Exercise
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int Reps { get; set; }

    public double? CaloriesBurnt { get; set; }

    public string? Equipment { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Workout> Workouts { get; set; } = new List<Workout>();
}
