using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FitnessTracker.Models;

public partial class FitnesstrackerContext : DbContext
{
    public FitnesstrackerContext()
    {
    }

    public FitnesstrackerContext(DbContextOptions<FitnesstrackerContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Diet> Diets { get; set; }

    public virtual DbSet<Dietitian> Dietitians { get; set; }

    public virtual DbSet<Exercise> Exercises { get; set; }

    public virtual DbSet<Goal> Goals { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Mealtype> Mealtypes { get; set; }

    public virtual DbSet<Member> Members { get; set; }

    public virtual DbSet<Membership> Memberships { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Shedule> Shedules { get; set; }

    public virtual DbSet<Slot> Slots { get; set; }

    public virtual DbSet<Tracking> Trackings { get; set; }

    public virtual DbSet<Trainer> Trainers { get; set; }

    public virtual DbSet<Usertype> Usertypes { get; set; }

    public virtual DbSet<Workout> Workouts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=fitnesstracker", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Diet>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("diet");

            entity.HasIndex(e => e.GoalId, "goaltypefk_idx");

            entity.HasIndex(e => e.MealtypeId, "mealtype_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(1000)
                .HasColumnName("description");
            entity.Property(e => e.GoalId).HasColumnName("goal_id");
            entity.Property(e => e.MealtypeId).HasColumnName("mealtype_id");

            entity.HasOne(d => d.Goal).WithMany(p => p.Diets)
                .HasForeignKey(d => d.GoalId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("goaltypefk");

            entity.HasOne(d => d.Mealtype).WithMany(p => p.Diets)
                .HasForeignKey(d => d.MealtypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("mealtype_id");
        });

        modelBuilder.Entity<Dietitian>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("dietitian");

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Contact)
                .HasMaxLength(255)
                .HasColumnName("contact");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Experience).HasColumnName("experience");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");

            entity.HasOne(d => d.Login).WithMany(p => p.Dietitians)
                .HasForeignKey(d => d.LoginId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("login");
        });

        modelBuilder.Entity<Exercise>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("exercise");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CaloriesBurnt).HasColumnName("calories_burnt");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Equipment)
                .HasMaxLength(255)
                .HasColumnName("equipment");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Reps)
                .HasDefaultValueSql("'10'")
                .HasColumnName("reps");
        });

        modelBuilder.Entity<Goal>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("goal");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.UsertypeId, "usertype_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Pwd)
                .HasMaxLength(255)
                .HasColumnName("pwd");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Uid)
                .HasMaxLength(255)
                .HasColumnName("uid");
            entity.Property(e => e.UsertypeId).HasColumnName("usertype_id");

            entity.HasOne(d => d.Usertype).WithMany(p => p.Logins)
                .HasForeignKey(d => d.UsertypeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("usertype_id");
        });

        modelBuilder.Entity<Mealtype>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("mealtype");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(45)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Member>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("member");

            entity.HasIndex(e => e.DietitianId, "dietitian_id_idx");

            entity.HasIndex(e => e.GoalId, "goal_id_idx");

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.HasIndex(e => e.MembershipId, "membership_id_idx");

            entity.HasIndex(e => e.TrainerId, "trainer_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Bloodgroup)
                .HasMaxLength(255)
                .HasColumnName("bloodgroup");
            entity.Property(e => e.Contact)
                .HasMaxLength(255)
                .HasColumnName("contact");
            entity.Property(e => e.DietitianId).HasColumnName("dietitian_id");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Enddate)
                .HasMaxLength(6)
                .HasColumnName("enddate");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.GoalId).HasColumnName("goal_id");
            entity.Property(e => e.Height)
                .HasMaxLength(255)
                .HasColumnName("height");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.MembershipId).HasColumnName("membership_id");
            entity.Property(e => e.Startdate)
                .HasMaxLength(6)
                .HasColumnName("startdate");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.TrainerId).HasColumnName("trainer_id");
            entity.Property(e => e.Weight)
                .HasMaxLength(255)
                .HasColumnName("weight");

            entity.HasOne(d => d.Dietitian).WithMany(p => p.Members)
                .HasForeignKey(d => d.DietitianId)
                .HasConstraintName("dietitian");

            entity.HasOne(d => d.Goal).WithMany(p => p.Members)
                .HasForeignKey(d => d.GoalId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("goal");

            entity.HasOne(d => d.Login).WithMany(p => p.Members)
                .HasForeignKey(d => d.LoginId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("loginlogin");

            entity.HasOne(d => d.Membership).WithMany(p => p.Members)
                .HasForeignKey(d => d.MembershipId)
                .HasConstraintName("membership");

            entity.HasOne(d => d.Trainer).WithMany(p => p.Members)
                .HasForeignKey(d => d.TrainerId)
                .HasConstraintName("trainer");
        });

        modelBuilder.Entity<Membership>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("membership");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Baseprice).HasColumnName("baseprice");
            entity.Property(e => e.Duration).HasColumnName("duration");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("payment");

            entity.HasIndex(e => e.MemberId, "membermember_idx");

            entity.HasIndex(e => e.MembershipId, "membershipid_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Ammount).HasColumnName("ammount");
            entity.Property(e => e.Date)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("date");
            entity.Property(e => e.MemberId).HasColumnName("member_id");
            entity.Property(e => e.MembershipId).HasColumnName("membership_id");

            entity.HasOne(d => d.Member).WithMany(p => p.Payments)
                .HasForeignKey(d => d.MemberId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("membermember");

            entity.HasOne(d => d.Membership).WithMany(p => p.Payments)
                .HasForeignKey(d => d.MembershipId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("membershipid");
        });

        modelBuilder.Entity<Shedule>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("shedule");

            entity.HasIndex(e => e.MemberId, "memberid_idx");

            entity.HasIndex(e => e.SlotId, "slotid_idx");

            entity.HasIndex(e => e.TrainerId, "trainerid_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.MemberId).HasColumnName("member_id");
            entity.Property(e => e.Shift).HasColumnName("shift");
            entity.Property(e => e.SlotId).HasColumnName("slot_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.TrainerId).HasColumnName("trainer_id");

            entity.HasOne(d => d.Member).WithMany(p => p.Shedules)
                .HasForeignKey(d => d.MemberId)
                .HasConstraintName("memberidid");

            entity.HasOne(d => d.Slot).WithMany(p => p.Shedules)
                .HasForeignKey(d => d.SlotId)
                .HasConstraintName("slotid");

            entity.HasOne(d => d.Trainer).WithMany(p => p.Shedules)
                .HasForeignKey(d => d.TrainerId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("traineridid");
        });

        modelBuilder.Entity<Slot>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("slot");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Time)
                .HasColumnType("time")
                .HasColumnName("time");
        });

        modelBuilder.Entity<Tracking>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("tracking");

            entity.HasIndex(e => e.MemberId, "memberid_idx");

            entity.HasIndex(e => e.WorkoutId, "workoutid_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.MemberId).HasColumnName("member_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.WorkoutId).HasColumnName("workout_id");

            entity.HasOne(d => d.Member).WithMany(p => p.Trackings)
                .HasForeignKey(d => d.MemberId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("memberid");

            entity.HasOne(d => d.Workout).WithMany(p => p.Trackings)
                .HasForeignKey(d => d.WorkoutId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("workoutid");
        });

        modelBuilder.Entity<Trainer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("trainer");

            entity.HasIndex(e => e.LoginId, "login_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Contact)
                .HasMaxLength(255)
                .HasColumnName("contact");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.Experience).HasColumnName("experience");
            entity.Property(e => e.Fname)
                .HasMaxLength(255)
                .HasColumnName("fname");
            entity.Property(e => e.Lname)
                .HasMaxLength(255)
                .HasColumnName("lname");
            entity.Property(e => e.LoginId).HasColumnName("login_id");

            entity.HasOne(d => d.Login).WithMany(p => p.Trainers)
                .HasForeignKey(d => d.LoginId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("login_id");
        });

        modelBuilder.Entity<Usertype>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("usertype");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Workout>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("workout");

            entity.HasIndex(e => e.ExerciseId, "exercise_id_idx");

            entity.HasIndex(e => e.GoalId, "goal_id_idx");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Calories).HasColumnName("calories");
            entity.Property(e => e.ExerciseId).HasColumnName("exercise_id");
            entity.Property(e => e.GoalId).HasColumnName("goal_id");
            entity.Property(e => e.Reps).HasColumnName("reps");

            entity.HasOne(d => d.Exercise).WithMany(p => p.Workouts)
                .HasForeignKey(d => d.ExerciseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("exercise_id");

            entity.HasOne(d => d.Goal).WithMany(p => p.Workouts)
                .HasForeignKey(d => d.GoalId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("goal_id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
