using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Payment
{
    public int Id { get; set; }

    public int MemberId { get; set; }

    public int MembershipId { get; set; }

    public DateTime? Date { get; set; }

    public double Ammount { get; set; }

    public virtual Member Member { get; set; } = null!;

    public virtual Membership Membership { get; set; } = null!;
}
