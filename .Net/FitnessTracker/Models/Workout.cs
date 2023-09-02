using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Workout
{
    public int Id { get; set; }

    public int GoalId { get; set; }

    public int ExerciseId { get; set; }

    public int? Reps { get; set; }

    public double? Calories { get; set; }

    public virtual Exercise Exercise { get; set; } = null!;

    public virtual Goal Goal { get; set; } = null!;

    public virtual ICollection<Tracking> Trackings { get; set; } = new List<Tracking>();
}
