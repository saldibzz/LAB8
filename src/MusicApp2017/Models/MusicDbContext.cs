using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MusicApp2017.Models;

namespace MusicApp2017.Models
{
    public class MusicDbContext : IdentityDbContext<ApplicationUser>
    {

        public MusicDbContext(DbContextOptions<MusicDbContext> options)
            : base(options)
        {

        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<MusicApp2017.Models.ApplicationUser> ApplicationUser { get; set; }
        public DbSet<MusicApp2017.Models.Rating> Rating { get; set; }
    }
}

