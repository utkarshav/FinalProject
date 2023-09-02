using System;
using System.Collections.Generic;

namespace FitnessTracker.Models;

public partial class Member
{
    public int Id { get; set; }

    public string? Fname { get; set; }

    public string? Lname { get; set; }

    public string? Email { get; set; }

    public int LoginId { get; set; }

    public string? Bloodgroup { get; set; }

    public string? Height { get; set; }

    public string? Weight { get; set; }

    public string? Contact { get; set; }

    public string? Address { get; set; }

    public int GoalId { get; set; }

    public int? Status { get; set; }

    public int? TrainerId { get; set; }

    public int? DietitianId { get; set; }

    public int? MembershipId { get; set; }

    public DateTime? Startdate { get; set; }

    public DateTime? Enddate { get; set; }

    public virtual Dietitian? Dietitian { get; set; }

    public virtual Goal Goal { get; set; } = null!;

    public virtual Login Login { get; set; } = null!;

    public virtual Membership? Membership { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Shedule> Shedules { get; set; } = new List<Shedule>();

    public virtual ICollection<Tracking> Trackings { get; set; } = new List<Tracking>();

    public virtual Trainer? Trainer { get; set; }
}
