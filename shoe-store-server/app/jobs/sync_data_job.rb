require 'faye/websocket'
require 'eventmachine'
require 'json'

class SyncDataJob < ApplicationJob
  queue_as :default

  def perform(*args)
    thread = Thread.new do
      EM.run {
        ws = Faye::WebSocket::Client.new('ws://localhost:8080/')

        ws.on :message do |event|
          p JSON.parse(event.data)
        end
      }
    end
    at_exit { thread.exit }
  end
end
