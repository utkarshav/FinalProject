using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Diet
{
    public int Id { get; set; }

    public int MealtypeId { get; set; }

    public int GoalId { get; set; }

    public string Description { get; set; } = null!;

    public virtual Goal Goal { get; set; } = null!;

    public virtual Mealtype Mealtype { get; set; } = null!;
}
