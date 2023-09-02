using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Shedule
{
    public int Id { get; set; }

    public int TrainerId { get; set; }

    public int? Shift { get; set; }

    public int? SlotId { get; set; }

    public int? MemberId { get; set; }

    public int? Status { get; set; }

    public virtual Member? Member { get; set; }

    public virtual Slot? Slot { get; set; }

    public virtual Trainer Trainer { get; set; } = null!;
}
