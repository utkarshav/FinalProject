using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Membership
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public double Baseprice { get; set; }

    public float Duration { get; set; }

    public virtual ICollection<Member> Members { get; set; } = new List<Member>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
}
