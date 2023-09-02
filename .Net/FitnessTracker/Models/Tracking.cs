using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Tracking
{
    public int Id { get; set; }

    public int MemberId { get; set; }

    public DateOnly Date { get; set; }

    public int WorkoutId { get; set; }

    public int Status { get; set; }

    public virtual Member Member { get; set; } = null!;

    public virtual Workout Workout { get; set; } = null!;
}
