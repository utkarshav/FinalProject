using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Goal
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<Diet> Diets { get; set; } = new List<Diet>();

    public virtual ICollection<Member> Members { get; set; } = new List<Member>();

    public virtual ICollection<Workout> Workouts { get; set; } = new List<Workout>();
}
