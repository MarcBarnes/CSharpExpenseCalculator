using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExpensesAPI.Models
{
    public class Entry
    {
        public string Description { get; set; }
        public bool IsExpense { get; set; }
        public double Value { get; set; }

    }
}