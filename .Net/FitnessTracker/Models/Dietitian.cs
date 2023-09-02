using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Dietitian
{
    public int Id { get; set; }

    public int LoginId { get; set; }

    public string? Fname { get; set; }

    public string? Lname { get; set; }

    public string? Email { get; set; }

    public string? Contact { get; set; }

    public string? Address { get; set; }

    public int? Experience { get; set; }

    public virtual Login Login { get; set; } = null!;

    public virtual ICollection<Member> Members { get; set; } = new List<Member>();
}
