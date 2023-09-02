using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Mealtype
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Diet> Diets { get; set; } = new List<Diet>();
}
