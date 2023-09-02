using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Login
{
    public int Id { get; set; }

    public int UsertypeId { get; set; }

    public string? Uid { get; set; }

    public string? Pwd { get; set; }

    public string? Email { get; set; }

    public int Status { get; set; }

    public virtual ICollection<Dietitian> Dietitians { get; set; } = new List<Dietitian>();

    public virtual ICollection<Member> Members { get; set; } = new List<Member>();

    public virtual ICollection<Trainer> Trainers { get; set; } = new List<Trainer>();

    public virtual Usertype Usertype { get; set; } = null!;
}
