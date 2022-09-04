package com.example.latticeairapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView

class Home : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.home)

        val summary = findViewById<ImageView>(R.id.summary)

        summary.setOnClickListener {
            val intent = Intent(this, Summary::class.java)
            startActivity(intent)
        }
    }
}