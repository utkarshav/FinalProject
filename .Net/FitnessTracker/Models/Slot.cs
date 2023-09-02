using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Slot
{
    public int Id { get; set; }

    public TimeOnly Time { get; set; }

    public virtual ICollection<Shedule> Shedules { get; set; } = new List<Shedule>();
}
